package com.pam.adapter.api.roles;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/api/roles")
@Tag(name = "Role API", description = "API for managing roles")
public class RoleController {


    @POST
    public Response createRoles() {}

    @GET
    public Response getAllRoles() {}


    @POST
    public Response createPermissions() {}
}