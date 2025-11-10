import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import {
  Heart,
  Calendar,
  ShoppingCart,
  CheckCircle2,
  Users,
  Shield,
  Smartphone,
  Zap,
  Star,
  ArrowRight
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b py-20 md:py-32">
          <div className="absolute inset-0 bg-linear-to-br from-pink-50 via-rose-50 to-background opacity-50" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              {/* <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-100">
                ✨ Grátis para sempre
              </Badge> */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Organize a vida a dois com{" "}
                <span className="bg-linear-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  amor e sincronia
                </span>
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Sync Love é o app perfeito para casais que querem compartilhar tarefas,
                gerenciar compras e organizar eventos juntos. Tudo em um só lugar! ❤️
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-linear-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                  {/* <Smartphone className="mr-2 h-5 w-5" /> */}
                  Baixar
                </Button>
                {/* <Button size="lg" variant="outline">
                  Ver Demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-20 md:py-32">
          <Container>
            <div className="mb-16 text-center">
              <Badge className="mb-4" variant="outline">
                Recursos
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Tudo que você precisa para organizar sua vida a dois
              </h2>
              <p className="text-lg text-muted-foreground">
                Recursos pensados especialmente para casais modernos
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                    <CheckCircle2 className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Tarefas Domésticas</CardTitle>
                  <CardDescription>
                    Dividam as tarefas de casa de forma justa e acompanhem o progresso de cada um
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Recorrência personalizada
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Placar mensal de pontos
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Histórico completo
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                    <ShoppingCart className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Listas de Compras</CardTitle>
                  <CardDescription>
                    Criem e compartilhem listas de supermercado em tempo real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Sincronização instantânea
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Controle de gastos
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Produtos favoritos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                    <Calendar className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Calendário Compartilhado</CardTitle>
                  <CardDescription>
                    Nunca mais esqueçam compromissos importantes do casal
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Eventos e lembretes
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Categorias personalizadas
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Eventos recorrentes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                    <Users className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Perfil do Casal</CardTitle>
                  <CardDescription>
                    Personalizem o app do jeito de vocês
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Fotos personalizadas
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Temas e cores
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Idiomas múltiplos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100">
                    <Shield className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle>Privacidade Total</CardTitle>
                  <CardDescription>
                    Seus dados são só de vocês dois
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Criptografia de ponta a ponta
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Dados protegidos
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-pink-500" fill="currentColor" />
                      Sem anúncios
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:border-pink-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                    <Zap className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Sincronização em Tempo Real</CardTitle>
                  <CardDescription>
                    Mudanças instantâneas em todos os dispositivos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Atualização automática
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Offline first
                    </li>
                    <li className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-rose-500" fill="currentColor" />
                      Backup automático
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="border-t bg-muted/50 py-20 md:py-32">
          <Container>
            <div className="mb-16 text-center">
              <Badge className="mb-4" variant="outline">
                Como Funciona
              </Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Simples de começar, fácil de usar
              </h2>
              <p className="text-lg text-muted-foreground">
                Em apenas 3 passos vocês estarão sincronizados
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-600 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Baixe o App</h3>
                <p className="text-muted-foreground">
                  Disponível gratuitamente para iOS e Android
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-600 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Convide seu Parceiro(a)</h3>
                <p className="text-muted-foreground">
                  Envie um convite pelo app e conectem-se
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-600 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Comecem a Organizar</h3>
                <p className="text-muted-foreground">
                  Criem tarefas, listas e eventos juntos!
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="border-t py-20 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Heart className="mx-auto mb-6 h-16 w-16 text-pink-500" fill="currentColor" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Pronto para sincronizar sua vida a dois?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Junte-se à comunidade de casais que já estão mais organizados e felizes com o Sync Love
              </p>
              <Button size="lg" className="bg-linear-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700">
                Baixar Agora
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                {/* Disponível para iOS e Android • 100% Gratuito • Sem anúncios */}
                Disponível para Android
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}

