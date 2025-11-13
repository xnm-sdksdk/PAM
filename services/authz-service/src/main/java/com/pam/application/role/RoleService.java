package com.pam.application.role;


import com.pam.domain.role.repository.RoleRepository;
import jakarta.enterprise.context.ApplicationScoped;
import lombok.RequiredArgsConstructor;

@ApplicationScoped
@RequiredArgsConstructor
public class RoleService {

    private final RoleRepository roleRepository;
}