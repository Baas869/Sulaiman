import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [english, setEnglish] = useState(0)
    const [french, setFrench] = useState(0)
    const [yoruba, setYoruba] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (english < 95) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (french < 88) {
                setFrench(prevCount => prevCount + 1);
            }
            if (yoruba < 98) {
                setYoruba(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [english, french, yoruba])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={65} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={french} size={65} />
                        <span className='text-xs font-bold text-Snow'>French</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={yoruba} size={65} />
                        <span className='text-xs font-bold text-Snow'>Yoruba</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages