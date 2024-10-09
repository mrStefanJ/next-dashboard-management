import Announcements from "@/components/Announcements";
import BigCalandar from "@/components/BigCalandar";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-lg font-semibold">Schedule</h1>
          <BigCalandar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* <EventCalender /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
