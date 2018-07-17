namespace UimfApp.Infrastructure.Forms.Dropdown
{
    using System.Collections.Generic;
	using UiMetadataFramework.Basic.Input.Dropdown;
	using UiMetadataFramework.Core;

    public class DropdownResponse : FormResponse
    {
        public IEnumerable<DropdownItem> Items { get; set; }
    }
}
