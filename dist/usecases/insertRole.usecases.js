"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleUseCase = void 0;
class CreateRoleUseCase {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async execute(role) {
        return await this.roleRepository.insert(role);
    }
}
exports.CreateRoleUseCase = CreateRoleUseCase;
//# sourceMappingURL=insertRole.usecases.js.map