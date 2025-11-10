import Link from "next/link"
import Image from "next/image"
import { Container } from "./container"
import { Github, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/sync_love-no-bg.png" 
                alt="Sync Love" 
                width={372} 
                height={247}
                className="h-6 w-auto"
              />
              <span className="font-bold text-primary">
                Sync Love
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              O app perfeito para casais organizarem sua vida a dois.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#recursos" className="text-muted-foreground hover:text-foreground">
                  Recursos
                </Link>
              </li>
              {/* <li>
                <Link href="#precos" className="text-muted-foreground hover:text-foreground">
                  Preços
                </Link>
              </li> */}
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-foreground">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-foreground">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="mb-4 text-sm font-semibold">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div> */}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>© 2025 Sync Love. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para casais apaixonados</p>
        </div>
      </Container>
    </footer>
  )
}
