"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_model_1 = require("../../domain/models/role.model");
const role_entity_1 = require("../entities/role.entity");
let DatabaseRoleRepository = class DatabaseRoleRepository {
    constructor(roleEntityRepository) {
        this.roleEntityRepository = roleEntityRepository;
    }
    convertToRoleEntity(role) {
        const roleEntity = new role_entity_1.Role();
        roleEntity.id = role.id;
        roleEntity.name = role.name;
        roleEntity.isDeleted = role.isDeleted;
        roleEntity.createdAt = role.createdAt;
        roleEntity.updatedAt = role.updatedAt;
        return roleEntity;
    }
    convertToRole(roleEntity) {
        const role = new role_model_1.Role();
        role.id = roleEntity.id;
        role.name = roleEntity.name;
        role.isDeleted = roleEntity.isDeleted;
        role.createdAt = roleEntity.createdAt;
        role.updatedAt = roleEntity.updatedAt;
        return role;
    }
    async insert(role) {
        const roleEntity = this.convertToRoleEntity(role);
        const result = await this.roleEntityRepository.insert(roleEntity);
        return this.convertToRole(result.generatedMaps[0]);
    }
    async findAll() {
        const rolesEntities = await this.roleEntityRepository.find();
        return rolesEntities.map((roleEntity) => this.convertToRole(roleEntity));
    }
    async findById(id) {
        const roleEntity = await this.roleEntityRepository.findOneOrFail({
            where: [{ id: id }],
        });
        return this.convertToRole(roleEntity);
    }
    updateById(id, name) {
        throw new Error('Method not implemented.');
    }
    deleteById(id) {
        throw new Error('Method not implemented.');
    }
};
exports.DatabaseRoleRepository = DatabaseRoleRepository;
exports.DatabaseRoleRepository = DatabaseRoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DatabaseRoleRepository);
//# sourceMappingURL=role.repository.js.map