import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Edit, Eye, Globe, ImageIcon, Users, Cable } from "lucide-react"

export default function MarketingSpecialist() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 pb-2 md:grid-cols-4 md:gap-6">
        <Card className="col-span-3 border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="mb-2 text-2xl font-bold text-primary">Division Level Marketing Specialist</h2>
            <p className="mb-4 text-gray-600">Junior marketer working on content creation and submission for review.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <Edit className="h-5 w-5" />
                <span>Create and edit content for communities and neighborhoods</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Eye className="h-5 w-5" />
                <span>Preview changes before submission</span>
              </li>
              <li className="flex items-center gap-2 text-primary">
                <Users className="h-5 w-5" />
                <span>Collaborate with team members</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="overflow-hidden border-none bg-white/80 shadow-lg backdrop-blur-sm">
          <Image
            src="/marketing-specialist.png?height=200&width=300"
            alt="Marketing Specialist Dashboard"
            width={150}
            height={100}
            className="mx-auto h-30 w-30 items-center justify-center md:h-full md:w-full object-cover"
          />
        </Card>
      </div>
      <Card className="border-none bg-white/80 shadow-lg backdrop-blur-sm">
        <CardContent className="p-6">
          <Tabs defaultValue="navigation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 rounded-lg bg-secondary p-1 lg:grid-cols-5">
              <TabsTrigger value="navigation" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                AI Enabled Task Management
              </TabsTrigger>
              <TabsTrigger value="authoring" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Content Authoring and Experimentation
              </TabsTrigger>
              <TabsTrigger value="preview" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Live Preview
              </TabsTrigger>
              <TabsTrigger value="dam" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                DAM Integration
              </TabsTrigger>
              <TabsTrigger value="workflow" className="text-wrap rounded-md py-2 text-xs md:text-sm">
                Authoring Workflow
              </TabsTrigger>
            </TabsList>
            <TabsContent value="navigation" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Task Management with Stream</h3>
                  <p className="mb-4 text-gray-600">
                    Fast and intuitive navigation tailored to your division's projects and tasks.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Globe className="h-5 w-5" />
                      <span>Quick access to relevant communities and neighborhoods</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Filtered view showing only your division's content</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <ImageIcon className="h-5 w-5" />
                      <span>Responsive and fast admin interface</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/stream_task_list.png?height=300&width=600"
                  alt="CMS Navigation Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="authoring" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Enhanced Content Authoring Experience</h3>
                  <p className="mb-4 text-gray-600">
                    Visual editing with real-time preview and Sitecore Stream for better content creation.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Cable className="h-5 w-5" />
                      <span>Brand Aware AI for content creation and optimization</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Edit className="h-5 w-5" />
                      <span>WYSIWYG editor for intuitive content creation</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <ImageIcon className="h-5 w-5" />
                      <span>Drag-and-drop interface for easy layout adjustments</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>Real-time preview of changes</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/pages.png?height=300&width=600"
                  alt="Content Authoring Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="preview" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Live Preview Functionality</h3>
                  <p className="mb-4 text-gray-600">
                    Visualize your content changes in real-time across different devices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Eye className="h-5 w-5" />
                      <span>Instant preview of content changes</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Globe className="h-5 w-5" />
                      <span>Device-specific previews (desktop, tablet, mobile)</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Side-by-side comparison of current and draft versions</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/preview.png?height=300&width=600"
                  alt="Live Preview Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="dam" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Integrated DAM Solution</h3>
                  <p className="mb-4 text-gray-600">
                    Seamless integration with third-party Digital Asset Management systems.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <ImageIcon className="h-5 w-5" />
                      <span>Direct access to DAM within the CMS interface</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Easy search and selection of images and videos</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Globe className="h-5 w-5" />
                      <span>Automatic metadata syncing between DAM and CMS</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/dam.png?height=300&width=600"
                  alt="DAM Integration Screenshot"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </TabsContent>
            <TabsContent value="workflow" className="mt-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-primary">Streamlined Authoring Workflow</h3>
                  <p className="mb-4 text-gray-600">Efficient content review and approval process.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-primary">
                      <Users className="h-5 w-5" />
                      <span>Clear status indicators for content (draft, in review, published)</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Edit className="h-5 w-5" />
                      <span>Easy submission of content for review</span>
                    </li>
                    <li className="flex items-center gap-2 text-primary">
                      <Globe className="h-5 w-5" />
                      <span>Notification system for workflow updates</span>
                    </li>
                  </ul>
                </div>
                <Image
                  src="/publish.png?height=300&width=600"
                  alt="Authoring Workflow Screenshot"
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

