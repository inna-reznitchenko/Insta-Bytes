import { expressEventEmitter, customExpressEvents } from "../event-listeners"
import {  Post } from "../models/Post"
import { userTopic } from "../messaging"
import { logger, errorLogger } from "../utils/loggers"

expressEventEmitter.on(customExpressEvents.NEW_POST, (newPost:Post)=>{
    setImmediate( async ()=>{
        try{
            let res = await userTopic.publishJSON(newPost)
            logger.debug(`Pub Sub message id: ${res}`)
        } catch(e) {
            logger.error(e)
            errorLogger.error(e)
        }
    })
})