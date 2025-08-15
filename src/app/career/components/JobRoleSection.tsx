import JobRoleCard from "./JobRoleCard";

const ROLES = [
  {
    role: "Mid-Level DevOps Developer",
    type: "Onsite",
    city: "Lahore",
    link: `/career/apply-now?role=${encodeURIComponent(
      "mid-level-devops-developer"
    )}`,
  },
  {
    role: "Business development Manager",
    type: "Onsite",
    city: "Lahore",
    link: `/career/apply-now?role=${encodeURIComponent(
      "business-development-manager"
    )}`,
  },
  {
    role: "Mid-Level UI/UX Designer",
    type: "Onsite",
    city: "Lahore",
    link: `/career/apply-now?role=${encodeURIComponent(
      "mid-level-ui-ux-designer"
    )}`,
  },
];

export default function JobRoleSection() {
  return (
    <div className="flex flex-col gap-20 ">
      <h3 className="text-green-gradient text-3xl lg:text-4xl 3xl:text-[40px] 5xl:text-[45px] text-center font-semibold">
        Find the Role that Best Fits You!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ROLES.map((role, index) => (
          <JobRoleCard
            key={index}
            role={role.role}
            type={role.type}
            city={role.city}
            link={role.link}
          />
        ))}
      </div>
    </div>
  );
}
