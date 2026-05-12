import { json } from "express";
import ErrorHandler from "../error/error.js";
import{Reservation} from "../models/reservationSchema.js";

export const sendReservation =async (req, res, next) => {
    const {firstName, lastName, email, date, time} = req.body;
    if(!firstName || !lastName || !email|| !date|| !time){
        return next (new ErrorHandler("Please fill full reservation form!",400));
    }
    try {
        await Reservation.create(firstName, lastName, email, date, time);
        res.status(200).json({
            success:true,
            message:"Reservation sent successfully"
        })
    } catch (error) {
        if(error.name === "validationError"){
            const validationErrors = Object.values(error.errors).map(
        (error)=>error.message
    );
    return next (new ErrorHandler(validationErrors.join(' , '),400))
        }
        return next (error);
    }
}