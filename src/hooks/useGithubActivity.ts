import { useEffect, useState } from "react";

const USERNAME = "Glinbor10";

interface GithubPushEvent {
  type: string;
  repo: { name: string };
  created_at: string;
  payload: { commits?: { message: string }[] };
}

export type GithubActivityState =
  { status: "loading" } | { status: "error" } | { status: "ready"; repo: string; message?: string; date: string };

/**
 * Pulls the latest public PushEvent from the GitHub events API (no auth needed).
 * Fails soft to "error" on rate limits or network issues so the UI can fall back to static copy.
 */
export function useGithubActivity(): GithubActivityState {
  const [state, setState] = useState<GithubActivityState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${USERNAME}/events/public`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json() as Promise<GithubPushEvent[]>;
      })
      .then((events) => {
        if (cancelled) return;
        const push = events.find((e) => e.type === "PushEvent");
        if (!push) {
          setState({ status: "error" });
          return;
        }
        const commits = push.payload.commits ?? [];
        const lastCommit = commits[commits.length - 1];
        setState({
          status: "ready",
          repo: push.repo.name.replace(`${USERNAME}/`, ""),
          message: lastCommit?.message?.split("\n")[0],
          date: push.created_at,
        });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
