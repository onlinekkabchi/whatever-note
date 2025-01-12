package dev.whatevernote.be.service;

import dev.whatevernote.be.tool.DataBaseConfigurator;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public abstract class InitIntegrationTest {

	protected static final Long MEMBER_ID = 1L;
	protected static final int FIRST_NOTE_ID = 1;
	protected static final int DEFAULT_RANGE = 1_000;
	@Autowired
	private DataBaseConfigurator testData;

	@BeforeEach
	void setUpDataBase() {
		testData.clear();
		testData.initDataSource();
	}
}
