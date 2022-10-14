const { render, screen, getByText } = require("@testing-library/react");
import Home from "../pages/index";
import {store} from "../store/store";
import {Provider} from "react-redux";

const HomeComponent = <Provider store={store}><Home skills={[]} projects={[]} /></Provider>;

describe("the home page", () => {
  beforeAll(() => {
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  it("should render the index page and heading section", () => {
    render(HomeComponent);
    expect(screen.getByText("I'm", { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText("RONALD SKINNER")
    ).toBeInTheDocument();
    expect(screen.getByText("Full-Stack Web Developer")).toBeInTheDocument();
  });

  it("should render the navigation menu", () => {
    const home = render(HomeComponent);
    const navbar = home.getByRole("navigation");
    expect(getByText(navbar, "HOME")).toBeInTheDocument();
    expect(getByText(navbar, "ABOUT")).toBeInTheDocument();
    expect(getByText(navbar, "SKILLS")).toBeInTheDocument();
    expect(getByText(navbar, "PROJECTS")).toBeInTheDocument();
    expect(getByText(navbar, "CONTACT")).toBeInTheDocument();
  });

  it("should render the index page and about section", () => {
    render(HomeComponent);
    expect(screen.getAllByText("About Me").length).toBeGreaterThan(0);
  });

  it("should render the index page and skills section", () => {
    render(HomeComponent);
    expect(screen.getAllByText("My Skills").length).toBeGreaterThan(0);
  });

  it("should render the index page and projects section", () => {
    render(HomeComponent);
    expect(screen.getAllByText("Recent Work").length).toBeGreaterThan(0);
  });

  it("should render the index page and contact section", () => {
    render(HomeComponent);
    expect(screen.getAllByText("Contact Me").length).toBeGreaterThan(0);
  });
});
