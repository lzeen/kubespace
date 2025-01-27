package types

import "time"

type Project struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Name        string    `gorm:"size:255;not null;uniqueIndex" json:"name"`
	Description string    `gorm:"size:2000;not null;" json:"description"`
	ClusterId   string    `gorm:"size:255;not null;" json:"cluster_id"`
	Namespace   string    `gorm:"size:255;not null;" json:"namespace"`
	Owner       string    `gorm:"size:255;not null" json:"owner"`
	CreateUser  string    `gorm:"size:255;not null" json:"create_user"`
	UpdateUser  string    `gorm:"size:255;not null" json:"update_user"`
	CreateTime  time.Time `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime  time.Time `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`
}

const (
	AppStatusUninstall    = "UnInstall"
	AppStatusNotReady     = "NotReady"
	AppStatusRunningFault = "RunningFault"
	AppStatusRunning      = "Running"

	AppTypeOrdinaryApp      = "ordinary_app"
	AppTypeMiddleware       = "middleware"
	AppTypeClusterComponent = "component"

	AppVersionScopeProjectApp = "project_app"
	AppVersionScopeStoreApp   = "store_app"
	AppVersionScopeComponent  = "component"
)

type ProjectApp struct {
	ID           uint        `gorm:"primaryKey" json:"id"`
	Scope        string      `gorm:"size:50;not null;uniqueIndex:ScopeNameUnique"`
	ScopeId      uint        `gorm:"not null;uniqueIndex:ScopeNameUnique" json:"scope_id"`
	Name         string      `gorm:"size:255;not null;uniqueIndex:ScopeNameUnique" json:"name"`
	Description  string      `gorm:"type:text;" json:"description"`
	AppVersionId uint        `gorm:"" json:"app_version_id"`
	AppVersion   *AppVersion `gorm:"-" json:"app_version"`
	Type         string      `gorm:"size:255;not null" json:"type"`
	Status       string      `gorm:"not null;size:255" json:"status"`
	Namespace    string      `gorm:"size:255;" json:"namespace"`
	CreateUser   string      `gorm:"size:255;not null" json:"create_user"`
	UpdateUser   string      `gorm:"size:255;not null" json:"update_user"`
	CreateTime   time.Time   `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime   time.Time   `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`

	PodsNum      int `gorm:"-" json:"pods_num"`
	ReadyPodsNum int `gorm:"-" json:"ready_pods_num"`
}

type ProjectAppRevision struct {
	ID            uint      `gorm:"primaryKey" json:"id"`
	ProjectAppId  uint      `gorm:"not null;uniqueIndex:ProjectAppBuildRevisionUnique" json:"project_app_id"`
	BuildRevision uint      `gorm:"not null;uniqueIndex:ProjectAppBuildRevisionUnique" json:"build_revision"`
	AppVersionId  uint      `gorm:"not null;" json:"app_version_id"`
	Values        string    `gorm:"type:longtext;not null" json:"values"`
	CreateUser    string    `gorm:"size:50;not null" json:"create_user"`
	CreateTime    time.Time `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime    time.Time `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`
}

type AppStore struct {
	ID          uint      `gorm:"primaryKey" json:"id"`
	Name        string    `gorm:"size:255;not null;" json:"name"`
	Description string    `gorm:"type:text;" json:"description"`
	Type        string    `gorm:"size:255;not null;" json:"type"`
	Icon        []byte    `gorm:"type:mediumblob" json:"icon"`
	CreateUser  string    `gorm:"size:255;not null" json:"create_user"`
	UpdateUser  string    `gorm:"size:255;not null" json:"update_user"`
	CreateTime  time.Time `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime  time.Time `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`
}

const (
	AppVersionFromImport = "import"
	AppVersionFromSpace  = "space"
)

type AppVersion struct {
	ID             uint      `gorm:"primaryKey" json:"id"`
	Scope          string    `gorm:"size:255;not null;uniqueIndex:ScopeAppNameVersionUnique" json:"scope"`
	ScopeId        uint      `gorm:"not null;uniqueIndex:ScopeAppNameVersionUnique" json:"scope_id"`
	PackageName    string    `gorm:"size:255;not null;uniqueIndex:ScopeAppNameVersionUnique" json:"package_name"`
	PackageVersion string    `gorm:"size:255;not null;uniqueIndex:ScopeAppNameVersionUnique" json:"package_version"`
	From           string    `gorm:"size:255;not null;" json:"from"`
	AppVersion     string    `gorm:"size:255;not null" json:"app_version"`
	Values         string    `gorm:"type:longtext;not null" json:"values"`
	Description    string    `gorm:"type:text;" json:"description"`
	ChartPath      string    `gorm:"size:255;not null" json:"chart_path"`
	CreateUser     string    `gorm:"size:50;not null" json:"create_user"`
	CreateTime     time.Time `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime     time.Time `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`
}

type AppVersionChart struct {
	ID         uint      `gorm:"primaryKey" json:"id"`
	Path       string    `gorm:"size:255;uniqueIndex"`
	Content    []byte    `gorm:"type:mediumblob" json:"content"`
	CreateTime time.Time `gorm:"column:create_time;not null;autoCreateTime" json:"create_time"`
	UpdateTime time.Time `gorm:"column:update_time;not null;autoUpdateTime" json:"update_time"`
}
