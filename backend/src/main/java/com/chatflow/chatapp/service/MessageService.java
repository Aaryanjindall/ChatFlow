package com.chatflow.chatapp.service;

import com.chatflow.chatapp.dto.request.SendMessageRequestDTO;
import com.chatflow.chatapp.exception.ChatException;
import com.chatflow.chatapp.exception.MessageException;
import com.chatflow.chatapp.exception.UserException;
import com.chatflow.chatapp.model.Message;
import com.chatflow.chatapp.model.User;

import java.util.List;
import java.util.UUID;

public interface MessageService {

    Message sendMessage(SendMessageRequestDTO req, UUID userId) throws UserException, ChatException;

    List<Message> getChatMessages(UUID chatId, User reqUser) throws UserException, ChatException;

    Message findMessageById(UUID messageId) throws MessageException;

    void deleteMessageById(UUID messageId, User reqUser) throws UserException, MessageException;

}
