import Communities from "@/components/Communites";
import SideBar from "@/components/SideMenu";
import CustomFeed from "@/components/homepage/CustomFeed";
import GeneralFeed from "@/components/homepage/GeneralFeed";
import { getAuthSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getAuthSession();

  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
    // <SideBar />
    //   <div>
    //     <h1 className="font-bold text-3xl md:text-4xl">Your feed</h1>

    //     {/* @ts-expect-error server component */}
    //     {session ? <CustomFeed /> : <GeneralFeed />}
    //   </div>

    //   {/* <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
    //         <div className="flex justify-between gap-x-4 py-3">
    //         <p className="text-zinc-500">
    //         Your personal Taha Render Forum frontpage. Come here to check
    //         in with your favorite communities.
    //         </p>
    //         </div>

    //         <Link
    //         aria-label="createcommunity"
    //           className={buttonVariants({
    //             className: "w-full mt-4 mb-6",
    //           })}
    //           href={`/r/create`}
    //         >
    //           Create Community
    //         </Link>
    //       </dl> */}

    //   <Communites />
    // </div>

    // <div className="flex w-full gap-x-6">
    //   {/* Blank div in the first column */}
    //   <div className="w-1/3">
    //     <SideBar />
    //   </div>

    //   {/* Content div in the center middle column */}
    //   <div className="w-1/3">
    //     {/* @ts-expect-error server component */}
    //     {session ? <CustomFeed /> : <GeneralFeed />}
    //   </div>

    //   {/* Communities component in the last column */}
    //   <div className="w-1/3">
    //     <Communites />
    //   </div>
    // </div>
    <div className="flex gap-x-5">
    <div className="flex-none w-1/4 bg-red-500" />
      {/* Fixed sidebar column */}
      {/* <div className="flex-none w-1/4 bg-emerald-400 fixed top-0 h-screen z-10">
        <SideBar />
      </div> */}

      {/* Main content column */}
      <div className="flex-2 w-1/2 bg-gray-200">
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}
      </div>

      {/* Third column */}
      <div className="w-1/4 bg-gray-300">
        <Communities />
      </div>
    </div>
  );
}