# Point Lovable's GitHub sync at your existing repo

No site code changes. This is a GitHub connection change, done in the Lovable UI plus a few local git commands.

## The constraint

Lovable cannot import or attach an existing GitHub repository. When you connect GitHub, Lovable creates a new repo and that repo becomes the two-way sync target. So to get live two-way sync into "your existing repo", the repo itself has to be the one Lovable connects to — which means recreating it under the same name after freeing that name, or accepting a new repo name.

## Recommended path (keeps the same repo name and URL)

1. Back up the existing repo locally, in case you want its old history:
   ```sh
   git clone --mirror <existing-repo-url> tz-old-backup.git
   ```
2. In GitHub, rename the existing repo (e.g. `triple-z-home-solutions` to `triple-z-home-solutions-archive`), or delete it if you don't need it. This frees the name.
3. In Lovable: Plus (+) menu in the chat input → GitHub → disconnect the current project repo (`triple-z-home-solutions-lambda`).
4. In Lovable: Plus (+) → GitHub → Connect project → choose your account/org → Create Repository, naming it exactly the freed name.
5. Lovable pushes the full current codebase and two-way sync is live on that repo. Anything that used to be in the old repo is effectively replaced, since the name/URL now points at the new one.

## If you must keep the exact existing repo object (no rename/delete)

Two-way sync is not possible there. The fallback is a one-way mirror:

1. Connect Lovable to a new repo (steps 3-4 above).
2. Force-push its contents over the existing repo whenever you want it updated:
   ```sh
   git clone <lovable-repo-url> tz && cd tz
   git remote add target <existing-repo-url>
   git push target main --force
   ```
   This completely overwrites what was there, history included.

Edits made directly in the existing repo will not flow back into Lovable in this mode.

## After switching

- Re-check any GitHub Actions, branch protection rules, or deploy hooks that were attached to the old repo — they don't carry over.
- Collaborators need re-inviting if the repo was recreated.
