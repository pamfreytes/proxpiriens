import Link from "next/link";

const Logo = () => (
  <>
  <div className="logo">
    <h1 onClick={<Link href="/"></Link>}>nuestro logo</h1>
  </div>


<style jsx>{`
    .logo {
      font-size: 24px;
    }
`}</style>
</>
)

export default Logo;
