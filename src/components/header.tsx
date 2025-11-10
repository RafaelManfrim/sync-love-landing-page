import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "./container"
import { Heart } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-600">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Sync Love
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#recursos"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Recursos
            </Link>
            <Link
              href="#como-funciona"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Como Funciona
            </Link>
            <Link
              href="#precos"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Preços
            </Link>
          </nav>

          <Button className="bg-linear-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
            Download
          </Button>
        </div>
      </Container>
    </header>
  )
}
