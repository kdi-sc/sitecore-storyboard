import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Eye, Globe, LayoutDashboard, Users, Zap } from "lucide-react"

export default function MarketingDirector() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 pb-2 md:grid-cols-4 md:gap-6">
        <Card className="col-span-3 border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="mb-2 text-2xl font-bold text-primary">Division Level Marketing Director</h2>
            <p className="mb-4 text-gray-600">
              Manages marketing team, authors content, and reviews/publishes team members' work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <Eye className="h-5 w-5" />
                <span>Review and approve content from team members</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                <span>Ensure data consistency across platforms</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Zap className="h-5 w-5" />
                <span>Streamline content publishing process</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <Image
            src="/marketing-director.png?height=400&width=600"
            alt="Marketing Director Dashboard"
            width={600}
            height={400}
            className="h-full w-full object-cover"
          />
        </Card>
      </div>
      <Card className="border-none bg-white/80 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <Tabs defaultValue="authoring" className="w-full">
            <TabsList className="h-30 grid w-full grid-cols-2 items-stretch rounded-lg bg-secondary p-1 md:h-16 lg:grid-cols-4">
              <TabsTrigger value="authoring" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Simplified, AI Enabled Authoring
              </TabsTrigger>
              <TabsTrigger value="data" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Data Consistency
              </TabsTrigger>
              <TabsTrigger value="workflow" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                AI Enabled Content and Campaign Workflows
              </TabsTrigger>
              <TabsTrigger value="training" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Integrated Brand Copilot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="authoring" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Intuitive Authoring Interface</h3>
                  <p className="mb-4 text-gray-600">Streamlined content creation process requiring minimal training.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>User-friendly WYSIWYG editor</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>Drag-and-drop components for easy page building</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Inline editing capabilities</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/pages.png?height=300&width=600"
                  alt="Authoring Interface Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="data" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Data Consistency Management</h3>
                  <p className="mb-4 text-gray-600">
                    Ensure data accuracy across the website and third-party platforms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Automated data validation before publishing</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>Real-time sync with third-party platforms (e.g., Google My Business)</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Data discrepancy alerts and resolution suggestions</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/page-designs.png?height=300&width=600"
                  alt="Data Consistency Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="workflow" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Efficient Content Workflows</h3>
                  <p className="mb-4 text-gray-600">Streamlined process for reviewing and publishing team content.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Clear overview of content pending review</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>In-line commenting and feedback system</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>One-click publishing with rollback option</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/task-list.png?height=300&width=600"
                  alt="Publishing Workflow Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="training" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Integrated Brand AI</h3>
                  <p className="mb-4 text-gray-600">
                    Built-in guidance and support to reduce reliance on external assistance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="h-5 w-5" />
                      <span>Brand Aware Copilots throughout the CMS</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>Interactive tutorials for new features</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Task Management and AI Enabled Content Experimentation</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/brand-assistant.png?height=300&width=600"
                  alt="Integrated Training Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

