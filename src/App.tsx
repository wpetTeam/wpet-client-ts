import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReadDiary, WriteDiary } from "views/Diary/services";
import { DiaryFeed } from "views/Diary/services/DiaryFeed";
import { Checkup, Registeration } from "views/PetInfo/services";
import { About, Home, PetInfo, PetSchedule, MyAccount, Diary } from "./views";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="diarys" element={<Diary />}>
                    <Route path="read" element={<ReadDiary />}></Route>
                    <Route path="write" element={<WriteDiary />} />
                </Route>
                <Route path="diary/:petId" element={<DiaryFeed />} />
                <Route path="/pet" element={<PetInfo />}>
                    <Route path="info" element={<Checkup />} />
                    <Route path="registeration" element={<Registeration />} />
                </Route>
                <Route path="pet-schedule" element={<PetSchedule />} />
                <Route path="user" element={<MyAccount />}></Route>
            </Routes>
        </React.Fragment>
    );
};

export default App;
