import { Column } from "./Column";

export const HomeThreeColumns = () => {

  return (
  <div className="ThreeColumns__wrapper"> 
    <Column number={10} title="ODDANYCH WORKÓW" description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
    <Column number={5} title="WSPARTYCH ORGANIZACJI" description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
    <Column number={7} title="ZORGANIZOWANYCH ZBIÓREK" description="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat." />
  </div>
  )
};
