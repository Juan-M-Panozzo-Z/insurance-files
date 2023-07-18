export default function CardLoading({ ...props }) {
    return (
        <div className="col-span-3 flex flex-col gap-2 justify-around items-center bg-primary absolute inset-1/4 md:inset-1/3 rounded-box shadow-xl">
            <h3 className=" text-2xl text-center">{`${props.title}...`}</h3>
            <span className="loading loading-spinner w-20"></span>
        </div>
    );
}
