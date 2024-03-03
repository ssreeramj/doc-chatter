import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <div className="flex item-center">
            <div className="mr-3 text-5xl font-bold">Document Chatter</div>
              <UserButton afterSignOutUrl="/"/>
          </div>
          <div className="flex mt-6">
            {isAuth && <Button> Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg">
            Join millions of students and researchers in learning about a document by chatting with it.
          </p>
        </div>
      </div>
    </div>
  );
}