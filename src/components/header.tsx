import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/images/sync_love-no-bg.png" 
              alt="Sync Love" 
              width={372} 
              height={247}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">
              Sync Love
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/#recursos"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Recursos
            </Link>
            <Link
              href="/#como-funciona"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Como Funciona
            </Link>
            {/* <Link
              href="#precos"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Preços
            </Link> */}
          </nav>

          <Button className="bg-primary hover:bg-primary/90">
            Baixar
          </Button>
        </div>
      </Container>
    </header>
  )
}
