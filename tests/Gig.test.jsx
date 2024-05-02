import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";

test("renders with the correct band name", () => {
    render(<Gig name="Bobby's band"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Bobby's band");
})

test("renders with the correct image ", () => {
    render(<Gig image="https://www.shutterstock.com/image-vector/vector-illustration-cool-detailed-red-260nw-94498447.jpg"/>);
    expect(screen.getByAltText("event image")).toHaveAttribute("src", "https://www.shutterstock.com/image-vector/vector-illustration-cool-detailed-red-260nw-94498447.jpg");
});


test("renders with the correct description ", () => {
    render(<Gig description="Great place to listen"/>);
    expect(screen.getByText("Great place to listen")).toBeInTheDocument();
});


test("renders with the correct date and time ", () => {
    render(<Gig date_and_time="12th feb, 2pm"/>);
    expect(screen.getByText("12th feb, 2pm")).toBeInTheDocument();
});

test("renders with the correct location ", () => {
    render(<Gig location="At my house"/>);
    expect(screen.getByText("At my house")).toBeInTheDocument();
});



test("renders with the correct 2nd location ", () => {
    render(<Gig location="Horror house"/>);
    expect(screen.getByText("Horror house")).toBeInTheDocument();
});
