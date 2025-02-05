import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MarketingSpecialist from "@/components/marketing-specialist"
import MarketingDirector from "@/components/marketing-director"
import CorporateMarketing from "@/components/corporate-marketing"
import { UserCircle, Users, Building2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-subtle via-white to-gray-200">
    
      <div className="container mx-auto p-4 py-8">
 
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">    
       Sitecore's Intelligent DXP</h1>
        <p className="text-center text-sm md:text-lg mb-8 text-gray-600 ">
          Explore how Sitecore empowers different roles for Tri Pointe Homes
          </p>
          <div className="flex items-center justify-center pb-10">
          <Image
            src="/logo-sitecore.svg"
            alt="Logo"
            width={0}
            height={0}
            className="w-1/6 p-4"
          />
          <Image
            src="/logo.png"
            alt="Logo"
            width={0}
            height={0}
            className="w-1/6"
          />

          </div>
   
        <Tabs defaultValue="specialist" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 rounded-xl bg-secondary p-1">
            <TabsTrigger
              value="specialist"
              className="rounded-lg py-2 sm:py-3 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <UserCircle className="w-5 h-5 mr-2" />
              Marketing Specialist
            </TabsTrigger>
            <TabsTrigger
              value="director"
              className="rounded-lg  py-2 sm:py-3 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Users className="w-5 h-5 mr-2" />
              Marketing Director
            </TabsTrigger>
            <TabsTrigger
              value="corporate"
              className="rounded-lg  py-2 sm:py-3 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-primary"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Corporate Marketing
            </TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="specialist">
              <MarketingSpecialist />
            </TabsContent>
            <TabsContent value="director">
              <MarketingDirector />
            </TabsContent>
            <TabsContent value="corporate">
              <CorporateMarketing />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  )
}

