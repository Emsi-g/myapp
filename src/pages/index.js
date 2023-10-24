import Link from "next/link"

const index = () => {
    return (
      <div>
          <h1>Hi welcome to my guys!</h1>
          <Link href="/product/review/AnyText">
          <h1> Dynamic route "Any Text"</h1>
          </Link>

          <Link href="/about">
          <h2>/about</h2>
          </Link>

          <Link href="/profile/mc">
          <h3>/test/mc this is me</h3>
          </Link>
          
      </div>
    )
  }
  
  export default index