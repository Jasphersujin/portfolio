import { GitHubCalendar } from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section className="w-full">

      <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6">
        <GitHubCalendar
          username="jasphersujin"
          colorScheme="dark"
          fontSize={14}
          blockSize={11}
          blockMargin={3}
        />
      </div>
    </section>
  );
};

export default GithubActivity;