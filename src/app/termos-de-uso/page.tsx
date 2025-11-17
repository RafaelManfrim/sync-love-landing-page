import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb } from "@/components/breadcrumb"
import { FileText, Check, X, AlertTriangle, Scale, UserCheck, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso - Sync Love",
  description: "Leia os termos e condições de uso do Sync Love. Regras claras e transparentes para uma experiência segura.",
  openGraph: {
    title: "Termos de Uso - Sync Love",
    description: "Conheça as regras de uso do aplicativo",
  },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b py-12 md:py-20">
          <Container>
            <div className="mb-8">
              <Breadcrumb items={[{ label: "Termos de Uso" }]} />
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-600">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="mb-4 text-center text-4xl font-bold tracking-tight">
                Termos de Uso
              </h1>
              <p className="text-center text-lg text-muted-foreground">
                Última atualização: 10 de novembro de 2025
              </p>
            </div>
          </Container>
        </section>

        <section className="py-12 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl space-y-8">
              <div>
                <p className="text-lg text-muted-foreground">
                  Bem-vindo ao Sync Love! Estes Termos de Uso (&ldquo;Termos&rdquo;) regem seu acesso e
                  uso do aplicativo Sync Love e todos os serviços relacionados. Ao criar uma
                  conta e usar nosso app, você concorda com estes Termos.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <UserCheck className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">1. Aceitação dos Termos</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Ao acessar ou usar o Sync Love, você concorda em estar vinculado a estes
                        Termos de Uso e à nossa Política de Privacidade. Se você não concordar
                        com qualquer parte destes termos, não use nosso aplicativo.
                      </p>
                      <p>
                        Reservamos o direito de modificar estes Termos a qualquer momento.
                        Notificaremos você sobre mudanças significativas e seu uso continuado
                        após as alterações constituirá aceitação dos novos termos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">2. Elegibilidade</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Para usar o Sync Love, você deve:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Ter pelo menos 18 anos de idade</li>
                        <li>Ter capacidade legal para celebrar contratos vinculantes</li>
                        <li>Não estar proibido de usar nossos serviços por lei aplicável</li>
                        <li>Fornecer informações precisas e completas ao criar sua conta</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">3. Conta e Segurança</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Ao criar uma conta no Sync Love, você concorda em:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Manter a confidencialidade de suas credenciais de login</li>
                        <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                        <li>Ser responsável por todas as atividades em sua conta</li>
                        <li>Fornecer e manter informações precisas e atualizadas</li>
                        <li>Não compartilhar sua conta com terceiros</li>
                      </ul>
                      <p className="mt-3">
                        Você pode vincular sua conta com apenas um parceiro(a) por vez. Ambos
                        terão acesso aos dados compartilhados no aplicativo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">4. Uso Aceitável</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Você concorda em usar o Sync Love apenas para fins legais e de acordo com estes Termos. Você NÃO deve:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Violar qualquer lei ou regulamento aplicável</li>
                        <li>Infringir direitos de propriedade intelectual</li>
                        <li>Transmitir conteúdo ilegal, ofensivo ou prejudicial</li>
                        <li>Interferir no funcionamento do aplicativo</li>
                        <li>Tentar acessar contas de outros usuários sem autorização</li>
                        <li>Fazer engenharia reversa ou descompilar o aplicativo</li>
                        <li>Usar o aplicativo para spam ou comunicações não solicitadas</li>
                        <li>Automatizar acesso ao aplicativo sem nossa permissão expressa</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">5. Conteúdo do Usuário</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Você mantém todos os direitos sobre o conteúdo que adiciona ao Sync Love
                        (tarefas, listas, eventos, etc.). Ao usar nosso aplicativo, você nos
                        concede uma licença limitada para:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Armazenar e processar seu conteúdo para fornecer os serviços</li>
                        <li>Fazer backup de seus dados para segurança</li>
                        <li>Sincronizar conteúdo entre você e seu parceiro(a)</li>
                      </ul>
                      <p className="mt-3">
                        Você é responsável por todo o conteúdo que adiciona e concorda em não
                        publicar conteúdo que viole leis ou direitos de terceiros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Scale className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">6. Propriedade Intelectual</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        O Sync Love e todos os seus componentes (design, código, marcas, logos)
                        são de propriedade exclusiva nossa ou de nossos licenciadores. Você
                        recebe apenas uma licença limitada, não exclusiva e revogável para usar
                        o aplicativo.
                      </p>
                      <p>
                        Você não pode copiar, modificar, distribuir, vender ou alugar qualquer
                        parte do aplicativo sem nossa permissão prévia por escrito.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <X className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">7. Cancelamento e Suspensão</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>Você pode cancelar sua conta a qualquer momento</strong> através
                        das configurações do aplicativo. Após o cancelamento:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Seus dados serão permanentemente excluídos</li>
                        <li>A vinculação com seu parceiro(a) será desfeita</li>
                        <li>Você perderá acesso a todos os dados compartilhados</li>
                      </ul>
                      <p className="mt-3">
                        <strong>Podemos suspender ou encerrar sua conta</strong> se você violar
                        estes Termos, sem aviso prévio e sem reembolso de valores pagos (se aplicável).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">8. Isenção de Garantias</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        O Sync Love é fornecido &ldquo;COMO ESTÁ&rdquo; e &ldquo;CONFORME DISPONÍVEL&rdquo;, sem
                        garantias de qualquer tipo, expressas ou implícitas. Não garantimos que:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>O aplicativo estará sempre disponível ou livre de erros</li>
                        <li>Defeitos serão corrigidos</li>
                        <li>O aplicativo atenderá suas necessidades específicas</li>
                        <li>Os resultados obtidos serão precisos ou confiáveis</li>
                      </ul>
                      <p className="mt-3">
                        Você usa o Sync Love por sua conta e risco. Fazemos backups regulares,
                        mas recomendamos que você mantenha cópias de informações importantes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">9. Limitação de Responsabilidade</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Na máxima extensão permitida por lei, não seremos responsáveis por
                        quaisquer danos indiretos, incidentais, especiais, consequenciais ou
                        punitivos, incluindo:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Perda de lucros ou receitas</li>
                        <li>Perda de dados ou informações</li>
                        <li>Interrupção de negócios</li>
                        <li>Perda de oportunidades</li>
                      </ul>
                      <p className="mt-3">
                        Nossa responsabilidade total para com você por todos os danos não
                        excederá R$ 100,00 (cem reais) ou o valor pago por você nos últimos
                        12 meses, o que for maior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Scale className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">10. Indenização</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Você concorda em nos indenizar e isentar de responsabilidade contra
                        quaisquer reclamações, perdas, danos ou despesas (incluindo honorários
                        advocatícios) decorrentes de:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Seu uso do Sync Love</li>
                        <li>Violação destes Termos</li>
                        <li>Violação de direitos de terceiros</li>
                        <li>Conteúdo que você adicionar ao aplicativo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">11. Lei Aplicável e Jurisdição</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Estes Termos serão regidos e interpretados de acordo com as leis da
                        República Federativa do Brasil. Quaisquer disputas decorrentes destes
                        Termos serão submetidas à jurisdição exclusiva dos tribunais do Brasil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                    <Check className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">12. Disposições Gerais</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>
                          <strong>Integralidade:</strong> Estes Termos constituem o acordo
                          completo entre você e nós
                        </li>
                        <li>
                          <strong>Divisibilidade:</strong> Se qualquer disposição for inválida,
                          as demais continuam em vigor
                        </li>
                        <li>
                          <strong>Renúncia:</strong> Não renunciar a um direito não significa
                          renúncia a direitos futuros
                        </li>
                        <li>
                          <strong>Cessão:</strong> Você não pode transferir seus direitos sem
                          nosso consentimento
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                    <FileText className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">13. Contato</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Se você tiver dúvidas sobre estes Termos de Uso, entre em contato
                        conosco:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>E-mail: contato@synclove.app</li>
                        {/* <li>Website: www.synclove.app/contato</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Importante:</strong> Ao usar o Sync Love, você confirma que leu,
                  compreendeu e concorda com estes Termos de Uso e nossa Política de
                  Privacidade. Se você não concordar com estes termos, não use nosso aplicativo.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
