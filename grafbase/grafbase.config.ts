import { g, auth, config } from "@grafbase/sdk";

// User Model

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 10 }),
  emai: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list(),
});

//Projects Model

const Project = g.model("Project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createBy: g.relation(() => User),
});

export default config({
  schema: g,
});
