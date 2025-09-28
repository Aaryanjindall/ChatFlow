package com.chatflow.chatapp.service;

import com.chatflow.chatapp.dto.request.UpdateUserRequestDTO;
import com.chatflow.chatapp.exception.UserException;
import com.chatflow.chatapp.model.User;

import java.util.List;
import java.util.UUID;

public interface UserService {

    User findUserById(UUID id) throws UserException;

    User findUserByProfile(String jwt) throws UserException;

    User updateUser(UUID id, UpdateUserRequestDTO request) throws UserException;

    List<User> searchUser(String query);

    List<User> searchUserByName(String name);

}
