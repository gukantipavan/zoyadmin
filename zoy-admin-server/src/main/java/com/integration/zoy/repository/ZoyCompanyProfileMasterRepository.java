package com.integration.zoy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.integration.zoy.entity.ZoyCompanyProfileMaster;
@Repository
public interface ZoyCompanyProfileMasterRepository extends JpaRepository<ZoyCompanyProfileMaster, String>{
	
}
