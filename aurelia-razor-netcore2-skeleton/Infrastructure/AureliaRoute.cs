namespace aurelia_razor_netcore2_skeleton.Infrastructure
{
    public struct AureliaRoute
    {
        public string Route { get; set; }

        public string Name { get; set; }

        public string ModuleId { get; set; }

        public bool Nav { get; set; }

        public string Title { get; set; }

        public string JsPath { get; set; } // Not used yet...
    }
}