import {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setLang1, setLang2, setText, setTranslate, showValue, setData } from "../../slice/translateSlice"


const TextTranslate = () => {
    const dispatch = useDispatch();
    const {lang1, lang2, text, translate} = useSelector(showValue);
    console.log(lang1);
    
    useEffect (() => {
        

    }, [lang1, lang2 ]);

    const onChangeSelect1 = (e) => {
        dispatch(setLang1(e.target.value));
    }

    const onChangeSelect2 = (e) => {
        dispatch(setLang2(e.target.value));
    }

    const onTextFormChange = (e) => {
        dispatch(setText(e.target.value));
    } 

    const onMakeTranslate = () => {
        if (lang1 && lang2 && text && (lang1 !== lang2)) {
            axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=${lang1}|${lang2}`)
            .then(function (res) { 
                dispatch(setTranslate(res.data.responseData.translatedText));
                dispatch(setData({text,lang1, lang2, translate: res.data.responseData.translatedText}));
                console.log({text,lang1, lang2, translate: res.data.responseData.translatedText});
            })

            .catch(function (error) {
                console.error(error)
            })
        } else {
            alert("Please, fill in all the inputs and text and choose two diffrent languages!")
        }
    }
    
    return (
        <>
            <h1>React Translate App</h1>
            <div className="mb-3">
                <select onChange={onChangeSelect1} className="form-select" aria-label="Default select example">
                    <option selected>Select Language</option>
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                    <option value="de">Deutch</option>
                </select>
            </div>
            <div className="mb-3">
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter text to translate </label>
                <textarea onChange={onTextFormChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <button onClick={onMakeTranslate} type="button" class="btn btn-primary mb-4">Translate</button>

            <div className="mb-3">
                <select onChange={onChangeSelect2} className="form-select" aria-label="Default select example">
                    <option selected>Select Language</option>
                    <option value="ru">Russian</option>
                    <option value="en">English</option>
                    <option value="de">Deutch</option>
                </select>
            </div>
            <div className="mb-3">
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Total result Text</label>
                <textarea value={translate} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}

export default TextTranslate;