import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Eye, Globe, LayoutDashboard, Users, Zap } from "lucide-react"

export default function MarketingDirector() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="col-span-3 bg-white/80 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-primary">Division Level Marketing Director</h2>
            <p className="text-gray-600 mb-4">
              Manages marketing team, authors content, and reviews/publishes team members' work.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <Eye className="w-5 h-5" />
                <span>Review and approve content from team members</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Globe className="w-5 h-5" />
                <span>Ensure data consistency across platforms</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Zap className="w-5 h-5" />
                <span>Streamline content publishing process</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Marketing Director Dashboard"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </Card>
      </div>
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
        <CardContent className="p-6">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 rounded-lg bg-secondary p-1">
              <TabsTrigger value="authoring" className="rounded-md py-2 text-sm">
                Simplified, AI Enabled Authoring
              </TabsTrigger>
              <TabsTrigger value="data" className="rounded-md py-2 text-sm">
                Data Consistency
              </TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-md py-2 text-sm">
               AI Enabled Content and Campaign Workflows
              </TabsTrigger>
              <TabsTrigger value="training" className="rounded-md py-2 text-sm">
                Integrated Brand Copilot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="authoring" className="mt-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Intuitive Authoring Interface</h3>
                  <p className="text-gray-600 mb-4">Streamlined content creation process requiring minimal training.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>User-friendly WYSIWYG editor</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="w-5 h-5" />
                      <span>Drag-and-drop components for easy page building</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Data Consistency Management</h3>
                  <p className="text-gray-600 mb-4">
                    Ensure data accuracy across the website and third-party platforms.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Automated data validation before publishing</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="w-5 h-5" />
                      <span>Real-time sync with third-party platforms (e.g., Google My Business)</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Efficient Content Workflows</h3>
                  <p className="text-gray-600 mb-4">Streamlined process for reviewing and publishing team content.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Clear overview of content pending review</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="w-5 h-5" />
                      <span>In-line commenting and feedback system</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="w-5 h-5" />
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
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Integrated Brand AI</h3>
                  <p className="text-gray-600 mb-4">
                    Built-in guidance and support to reduce reliance on external assistance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Brand Aware Copilots throughout the CMS</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="w-5 h-5" />
                      <span>Interactive tutorials for new features</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="w-5 h-5" />
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

