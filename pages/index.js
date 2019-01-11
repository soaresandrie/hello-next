import Link from 'next/link'
// This is the link API

const Index = () => (
    <div>
        <Link href="/about" >
            <button>Go to About Page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index