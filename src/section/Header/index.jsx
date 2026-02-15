import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsDownToLine } from "@fortawesome/free-solid-svg-icons/faArrowsDownToLine";
import { data } from "../../Contents/header";
const Header = () =>{
    return(
        <div className="flex flex-col gap-2">
            <div className="text-primaryTitle text-3xl">{data.name}</div>
            <div className="text-primaryAccent font-semibold">
              {data.title}
            </div>
            <div className="text-sm w-5/6">
              {data.caption}
            </div>
            <div className="mt-4">
              <a href={data.link} target="_blank">
                <span className="rounded-md bg-primaryTitle text-white py-2 px-4">
                  {data.btnText}
                  <span className="rotate-90 inline-block ml-2 text-sm">
                    <FontAwesomeIcon
                      className="animate-bounce"
                      icon={faArrowsDownToLine}
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
    )
}
export default Header