import Button from "./button"

export const NotFound = () => {
  return (
    <>
      <h1 className="404-banner">404</h1>
      <h2>We couldn't find that page</h2>
      <p><Button href="/">Back to Home</Button></p>
    </>
  )
}
