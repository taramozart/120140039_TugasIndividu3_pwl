/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div>
      <div className="card w-[341px] flex flex-col p-6 bg-white border-slate-400 rounded border-[3px]">
        <div className="foto">
          <img className="w-full" src={props.img} alt="" />
        </div>
        <div className="title text-[14px] mt-1 font-bold">{props.title}</div>
        <div className="text text-[12px] mt-1">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
