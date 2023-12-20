



CREATE TABLE "Номенк"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номен" NVARCHAR2(255) NULL,

	"ЕдИзмер" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчОПрод"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОкончания" DATE NULL,

	"ДатаНачала" DATE NULL,

	"СостОтгруз" NVARCHAR2(12) NULL,

	"СостОплат" NVARCHAR2(15) NULL,

	"Сумма" NUMBER(10) NULL,

	"СумВклНДС" NUMBER(1) NULL,

	"Склады" RAW(16) NOT NULL,

	"Организ" RAW(16) NOT NULL,

	"Контр" RAW(16) NOT NULL,

	"Менедж" RAW(16) NOT NULL,

	"Подраз" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотруд"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Долж" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Менедж"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотруд" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Долж"
(

	"primaryKey" RAW(16) NOT NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧТовИУс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сумма" NUMBER(10) NULL,

	"СуммаНДС" NUMBER(10) NULL,

	"Количестов" NUMBER(10) NULL,

	"Цена" NUMBER(10) NULL,

	"КолКЗаказПоста" NUMBER(10) NULL,

	"Номенк" RAW(16) NOT NULL,

	"ОтчОПрод_m0" RAW(16) NULL,

	"ОтчОПрод_m1" RAW(16) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЕдИзмер"
(

	"primaryKey" RAW(16) NOT NULL,

	"ЕдИзм" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗакПокуп"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаОкончания" DATE NULL,

	"ДатаНачала" DATE NULL,

	"СостОтгруз" NVARCHAR2(12) NULL,

	"СостОплат" NVARCHAR2(15) NULL,

	"Сумма" NUMBER(10) NULL,

	"СумВклНДС" NUMBER(1) NULL,

	"Склады" RAW(16) NOT NULL,

	"Организ" RAW(16) NOT NULL,

	"Контр" RAW(16) NOT NULL,

	"Менедж" RAW(16) NOT NULL,

	"Подраз" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Организация" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Подраз"
(

	"primaryKey" RAW(16) NOT NULL,

	"Подразделение" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КолВРез"
(

	"primaryKey" RAW(16) NOT NULL,

	"Количество" NUMBER(10) NULL,

	"Номенк" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Контр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Контрагент" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склады"
(

	"primaryKey" RAW(16) NOT NULL,

	"Склад" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтчОстНСкл"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Колл" NUMBER(10) NULL,

	"Склады" RAW(16) NOT NULL,

	"КолВРез" RAW(16) NOT NULL,

	"Номенк" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Номенк"
	ADD CONSTRAINT "Номенк_FЕдИзмер_0" FOREIGN KEY ("ЕдИзмер") REFERENCES "ЕдИзмер" ("primaryKey");

CREATE INDEX "Номенк_IЕдИзмер" on "Номенк" ("ЕдИзмер");

ALTER TABLE "ОтчОПрод"
	ADD CONSTRAINT "ОтчОПрод_FСкл_9652" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ОтчОПрод_IСклады" on "ОтчОПрод" ("Склады");

ALTER TABLE "ОтчОПрод"
	ADD CONSTRAINT "ОтчОПрод_FОрга_999" FOREIGN KEY ("Организ") REFERENCES "Организ" ("primaryKey");

CREATE INDEX "ОтчОПрод_IОрг_6806" on "ОтчОПрод" ("Организ");

ALTER TABLE "ОтчОПрод"
	ADD CONSTRAINT "ОтчОПрод_FКонтр_0" FOREIGN KEY ("Контр") REFERENCES "Контр" ("primaryKey");

CREATE INDEX "ОтчОПрод_IКонтр" on "ОтчОПрод" ("Контр");

ALTER TABLE "ОтчОПрод"
	ADD CONSTRAINT "ОтчОПрод_FМен_4143" FOREIGN KEY ("Менедж") REFERENCES "Менедж" ("primaryKey");

CREATE INDEX "ОтчОПрод_IМенедж" on "ОтчОПрод" ("Менедж");

ALTER TABLE "ОтчОПрод"
	ADD CONSTRAINT "ОтчОПрод_FПод_5584" FOREIGN KEY ("Подраз") REFERENCES "Подраз" ("primaryKey");

CREATE INDEX "ОтчОПрод_IПодраз" on "ОтчОПрод" ("Подраз");

ALTER TABLE "Сотруд"
	ADD CONSTRAINT "Сотруд_FДолж_0" FOREIGN KEY ("Долж") REFERENCES "Долж" ("primaryKey");

CREATE INDEX "Сотруд_IДолж" on "Сотруд" ("Долж");

ALTER TABLE "Менедж"
	ADD CONSTRAINT "Менедж_FСотруд_0" FOREIGN KEY ("Сотруд") REFERENCES "Сотруд" ("primaryKey");

CREATE INDEX "Менедж_IСотруд" on "Менедж" ("Сотруд");

ALTER TABLE "ТЧТовИУс"
	ADD CONSTRAINT "ТЧТовИУс_FНоме_780" FOREIGN KEY ("Номенк") REFERENCES "Номенк" ("primaryKey");

CREATE INDEX "ТЧТовИУс_IНоменк" on "ТЧТовИУс" ("Номенк");

ALTER TABLE "ТЧТовИУс"
	ADD CONSTRAINT "ТЧТовИУс_FЗак_4705" FOREIGN KEY ("ОтчОПрод_m0") REFERENCES "ЗакПокуп" ("primaryKey");

CREATE INDEX "ТЧТовИУс_IОтч_1092" on "ТЧТовИУс" ("ОтчОПрод_m0");

ALTER TABLE "ТЧТовИУс"
	ADD CONSTRAINT "ТЧТовИУс_FОтч_2276" FOREIGN KEY ("ОтчОПрод_m1") REFERENCES "ОтчОПрод" ("primaryKey");

CREATE INDEX "ТЧТовИУс_IОтч_1093" on "ТЧТовИУс" ("ОтчОПрод_m1");

ALTER TABLE "ЗакПокуп"
	ADD CONSTRAINT "ЗакПокуп_FСкл_7758" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ЗакПокуп_IСклады" on "ЗакПокуп" ("Склады");

ALTER TABLE "ЗакПокуп"
	ADD CONSTRAINT "ЗакПокуп_FОрг_6115" FOREIGN KEY ("Организ") REFERENCES "Организ" ("primaryKey");

CREATE INDEX "ЗакПокуп_IОрг_3290" on "ЗакПокуп" ("Организ");

ALTER TABLE "ЗакПокуп"
	ADD CONSTRAINT "ЗакПокуп_FКонтр_0" FOREIGN KEY ("Контр") REFERENCES "Контр" ("primaryKey");

CREATE INDEX "ЗакПокуп_IКонтр" on "ЗакПокуп" ("Контр");

ALTER TABLE "ЗакПокуп"
	ADD CONSTRAINT "ЗакПокуп_FМен_2249" FOREIGN KEY ("Менедж") REFERENCES "Менедж" ("primaryKey");

CREATE INDEX "ЗакПокуп_IМенедж" on "ЗакПокуп" ("Менедж");

ALTER TABLE "ЗакПокуп"
	ADD CONSTRAINT "ЗакПокуп_FПод_3690" FOREIGN KEY ("Подраз") REFERENCES "Подраз" ("primaryKey");

CREATE INDEX "ЗакПокуп_IПодраз" on "ЗакПокуп" ("Подраз");

ALTER TABLE "КолВРез"
	ADD CONSTRAINT "КолВРез_FНоменк_0" FOREIGN KEY ("Номенк") REFERENCES "Номенк" ("primaryKey");

CREATE INDEX "КолВРез_IНоменк" on "КолВРез" ("Номенк");

ALTER TABLE "ОтчОстНСкл"
	ADD CONSTRAINT "ОтчОстНСкл_FС_8161" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "ОтчОстНСкл_IС_9176" on "ОтчОстНСкл" ("Склады");

ALTER TABLE "ОтчОстНСкл"
	ADD CONSTRAINT "ОтчОстНСкл_FКо_354" FOREIGN KEY ("КолВРез") REFERENCES "КолВРез" ("primaryKey");

CREATE INDEX "ОтчОстНСкл_IК_4949" on "ОтчОстНСкл" ("КолВРез");

ALTER TABLE "ОтчОстНСкл"
	ADD CONSTRAINT "ОтчОстНСкл_FН_3526" FOREIGN KEY ("Номенк") REFERENCES "Номенк" ("primaryKey");

CREATE INDEX "ОтчОстНСкл_IН_7933" on "ОтчОстНСкл" ("Номенк");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


