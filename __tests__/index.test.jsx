const { render, screen, getByText } = require("@testing-library/react");
import Home from "../pages/index";

describe("the home page", () => {
  beforeAll(() => {
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  it("should render the index page and heading section", () => {
    render(<Home skills={[]} />);
    expect(screen.getByText("I'm", { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText("Ronald Skinner", { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Web Developer")).toBeInTheDocument();
  });

  it("should render the navigation menu", () => {
    const home = render(<Home skills={[]} />);
    const navbar = home.getByRole("navigation");
    expect(getByText(navbar, "HOME")).toBeInTheDocument();
    expect(getByText(navbar, "ABOUT")).toBeInTheDocument();
    expect(getByText(navbar, "SKILLS")).toBeInTheDocument();
    expect(getByText(navbar, "PROJECTS")).toBeInTheDocument();
    expect(getByText(navbar, "CONTACT")).toBeInTheDocument();
  });

  it("should render the index page and about section", () => {
    render(<Home skills={[]} />);
    expect(screen.getAllByText("About Me").length).toBeGreaterThan(0);
  });

  it("should render the index page and skills section", () => {
    render(<Home skills={[]} />);
    expect(screen.getAllByText("My Skills").length).toBeGreaterThan(0);
  });

  it("should render the index page and projects section", () => {
    render(<Home skills={[]} />);
    expect(screen.getAllByText("My Projects").length).toBeGreaterThan(0);
  });

  it("should render the index page and contact section", () => {
    render(<Home skills={[]} />);
    expect(screen.getAllByText("Contact Me").length).toBeGreaterThan(0);
  });
});
