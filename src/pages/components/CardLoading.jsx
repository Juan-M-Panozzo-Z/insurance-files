export default function CardLoading({ ...props }) {
    return (
            <div className="flex flex-col gap-2 justify-around items-center bg-primary rounded-box shadow-xl p-8">
                <h3 className=" text-2xl text-center">{`${props.title}...`}</h3>
                <span className="loading loading-spinner w-20"></span>
            </div>
    );
}
