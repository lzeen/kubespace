package serializers

type ProjectSerializer struct {
	Name        string `json:"name" form:"name"`
	Description string `json:"description" form:"description"`
	ClusterId   string `json:"cluster_id" form:"cluster_id"`
	Namespace   string `json:"namespace" form:"namespace"`
	Owner       string `json:"owner" form:"owner"`
}

type ProjectCreateAppSerializer struct {
	ProjectId uint              `json:"project_id" form:"project_id"`
	Name      string            `json:"name" form:"name"`
	Version   string            `json:"version" form:"version"`
	Chart     string            `json:"chart" form:"chart"`
	Templates map[string]string `json:"templates" form:"templates"`
	Values    string            `json:"values" form:"values"`
}

type ProjectInstallAppSerializer struct {
	ProjectAppId uint   `json:"project_app_id" form:"project_app_id"`
	Values       string `json:"values" form:"values"`
	AppVersionId uint   `json:"app_version_id" form:"app_version_id"`
}

type ProjectAppListSerializer struct {
	ProjectId uint   `json:"project_id" form:"project_id"`
	Name      string `json:"name" form:"name"`
	Status    string `json:"status" form:"status"`
}

type ProjectAppVersionListSerializer struct {
	Scope   string `json:"scope" form:"scope"`
	ScopeId uint   `json:"scope_id" form:"scope_id"`
}