import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Container } from "@/components/container"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb } from "@/components/breadcrumb"
import { Shield, Lock, Eye, Database, UserX, Mail } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade - Sync Love",
  description: "Saiba como o Sync Love coleta, usa e protege suas informações pessoais. Seus dados são privados e seguros.",
  openGraph: {
    title: "Política de Privacidade - Sync Love",
    description: "Transparência total sobre como protegemos seus dados",
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b py-12 md:py-20">
          <Container>
            <div className="mb-8">
              <Breadcrumb items={[{ label: "Política de Privacidade" }]} />
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-rose-600">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="mb-4 text-center text-4xl font-bold tracking-tight">
                Política de Privacidade
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
                  No Sync Love, levamos sua privacidade muito a sério. Esta política descreve
                  como coletamos, usamos e protegemos suas informações pessoais quando você
                  usa nosso aplicativo.
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                    <Database className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">1. Informações que Coletamos</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Coletamos as seguintes informações quando você usa o Sync Love:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>
                          <strong>Informações de Conta:</strong> Nome, e-mail e foto de perfil que você
                          fornece ao criar sua conta.
                        </li>
                        <li>
                          <strong>Informações do Casal:</strong> Dados compartilhados entre você e seu
                          parceiro(a), incluindo tarefas, listas de compras e eventos do calendário.
                        </li>
                        <li>
                          <strong>Informações de Uso:</strong> Como você interage com o aplicativo,
                          recursos utilizados e preferências.
                        </li>
                        <li>
                          <strong>Informações Técnicas:</strong> Tipo de dispositivo, sistema operacional,
                          versão do app e identificadores únicos.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <Eye className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">2. Como Usamos suas Informações</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Utilizamos suas informações para:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Fornecer e manter os serviços do Sync Love</li>
                        <li>Sincronizar dados entre você e seu parceiro(a)</li>
                        <li>Melhorar e personalizar sua experiência</li>
                        <li>Enviar notificações importantes sobre o app</li>
                        <li>Responder suas dúvidas e fornecer suporte</li>
                        <li>Garantir a segurança e prevenir fraudes</li>
                        <li>Cumprir obrigações legais</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                    <Lock className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">3. Compartilhamento de Informações</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        <strong>Seus dados são PRIVADOS.</strong> Não vendemos, alugamos ou
                        compartilhamos suas informações pessoais com terceiros para fins de
                        marketing.
                      </p>
                      <p>Podemos compartilhar informações apenas nas seguintes situações:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>
                          <strong>Com seu Parceiro(a):</strong> Os dados que você adiciona no app
                          são sincronizados com a conta vinculada do seu parceiro(a).
                        </li>
                        <li>
                          <strong>Provedores de Serviço:</strong> Com empresas que nos ajudam a
                          operar o app (hospedagem, análise, suporte), sob rigorosos acordos de
                          confidencialidade.
                        </li>
                        <li>
                          <strong>Conformidade Legal:</strong> Quando exigido por lei ou para
                          proteger nossos direitos legais.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <Shield className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">4. Segurança dos Dados</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Implementamos medidas de segurança para proteger suas informações:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
                        <li>Criptografia de dados em repouso</li>
                        <li>Autenticação segura com tokens JWT</li>
                        <li>Controle de acesso rigoroso aos servidores</li>
                        <li>Monitoramento contínuo de segurança</li>
                        <li>Backups regulares e seguros</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                    <UserX className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">5. Seus Direitos</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>Você tem os seguintes direitos sobre seus dados:</p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>
                          <strong>Acesso:</strong> Solicitar uma cópia de todos os dados que temos sobre você
                        </li>
                        <li>
                          <strong>Correção:</strong> Atualizar informações incorretas ou incompletas
                        </li>
                        <li>
                          <strong>Exclusão:</strong> Solicitar a exclusão de sua conta e todos os dados
                          associados
                        </li>
                        <li>
                          <strong>Portabilidade:</strong> Receber seus dados em formato estruturado
                        </li>
                        <li>
                          <strong>Retirada de Consentimento:</strong> Retirar consentimento para
                          processamento de dados a qualquer momento
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <Database className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">6. Retenção de Dados</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Mantemos seus dados pelo tempo necessário para fornecer nossos serviços.
                        Se você excluir sua conta, seus dados serão permanentemente deletados
                        em até 30 dias, exceto quando precisamos retê-los para cumprir obrigações
                        legais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                    <Eye className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">7. Cookies e Tecnologias Similares</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Utilizamos cookies e tecnologias similares para melhorar sua experiência,
                        manter sua sessão ativa e analisar o uso do aplicativo. Você pode controlar
                        o uso de cookies através das configurações do seu dispositivo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <Shield className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">8. Menores de Idade</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        O Sync Love não é direcionado a menores de 18 anos. Não coletamos
                        intencionalmente informações de menores. Se você acredita que coletamos
                        dados de um menor, entre em contato conosco imediatamente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-100">
                    <Database className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">9. Alterações nesta Política</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos
                        você sobre mudanças significativas através do app ou por e-mail. O uso
                        continuado do Sync Love após as alterações constitui aceitação da nova
                        política.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-100">
                    <Mail className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">10. Entre em Contato</h2>
                    <div className="space-y-3 text-muted-foreground">
                      <p>
                        Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer
                        seus direitos, entre em contato conosco:
                      </p>
                      <ul className="ml-6 space-y-2 list-disc">
                        <li>E-mail: privacidade@synclove.app</li>
                        <li>Website: www.synclove.app/contato</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/50 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Conformidade com LGPD:</strong> Esta Política de Privacidade está em
                  conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
                  e o Regulamento Geral de Proteção de Dados da União Europeia (GDPR).
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
