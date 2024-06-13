import { Link, Card } from '~/components';
import { IconComcastBusiness } from '~/components/Icons';

const Experience = () => {
  return (
    <div className="grow-1 flex h-full w-full flex-col items-center p-6 md:space-y-12">
      <div className="relative w-full md:w-1/2">
        {/* Experience heading */}
        <Card
          className=""
          header={
            <h2 className="font-nunito text-2.5xl font-bold text-slate-900">
              Experience
            </h2>
          }
        />

        {/* Floating bar */}
        <div className="invisible absolute -bottom-2 -right-20 -z-10 h-40 w-40 animate-floatSlow rounded-full bg-gradient-to-b from-slate-200 to-slate-600 shadow-md md:visible" />
      </div>

      <div className="flex h-full w-full flex-col space-y-4 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-3 md:gap-12">
        <div className="flex items-center">
          {/* Comcast */}
          <Card>
            <div>
              <h3 className="text-xl font-semibold">
                Comcast Business - Frontend Engineer IV
              </h3>
              <h4 className="text-lg font-medium">August 2022 - April 2024</h4>
            </div>
            <p></p>
          </Card>
          <div className="absolute -z-10 h-64 w-64 rotate-1 transform rounded-full bg-gradient-to-br from-slate-400 to-black bg-fixed md:h-24 md:w-24" />
        </div>

        {/* Comcast photo */}
        <div className="flex items-center justify-center">
          <Card className="w-full" variant="tertiary">
            {/* Improve accessibility */}
            <Link
              className="flex w-full items-center justify-center"
              target="_blank"
              rel="noreferrer"
              to="https://business.comcast.com/"
              variant="icon"
            >
              <IconComcastBusiness />
            </Link>
          </Card>
        </div>

        {/* Canopy */}
        <div className="flex items-center">
          <Card>
            <h3 className="text-xl font-semibold">
              Canopy Servicing - Software Engineer
            </h3>
            <h4 className="text-lg font-medium">July 2021 - July 2022</h4>
          </Card>
        </div>

        {/* Canopy photo */}
        <div className="flex items-center justify-center">
          <Card className="w-full" variant="tertiary">
            <Link
              className="w-full"
              rel="noreferrer"
              target="_blank"
              to="https://www.canopyservicing.com/canopyos"
            >
              <img src="assets/canopy_logo.png" alt="canopy servicing logo" />
            </Link>
          </Card>
          <div className="absolute -z-10 h-8 w-8 -rotate-12 transform rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed md:left-72 md:h-full md:w-2" />
        </div>

        {/* Zeal */}
        <div className="relative flex items-center">
          <Card>
            <h3 className="text-xl font-semibold">
              Zeal Enterprises - Lead Frontend Engineer
            </h3>
            <h4 className="text-lg font-medium">January 2021 - July 2021</h4>
          </Card>
          <div className="absolute -z-10 h-8 w-8 animate-floatSlow rounded-full bg-gradient-to-br from-slate-200 to-black bg-fixed motion-reduce:animate-none md:-left-20 md:top-8 md:h-28 md:w-28" />
        </div>

        {/* Zeal photo */}
        <div className="flex items-center justify-center">
          <Card className="w-full" variant="tertiary">
            <img
              className="h-32 w-32"
              src="assets/zeal_logo.jpg"
              alt="zeal website logo"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
