import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const theme = {
  light: [
    "#303030", // Tailwind gray-300
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
  dark: [
    "#303030",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
  ],
};

const GithubActivity = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="w-full">
      <div className="rounded-2xl border border-border bg-card p-6 transition-colors">
        <GitHubCalendar
          username="jasphersujin"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          theme={theme}
          blockSize={11}
          blockMargin={3}
          blockRadius={3}
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default GithubActivity;