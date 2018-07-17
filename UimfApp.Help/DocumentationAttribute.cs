namespace UimfApp.Help
{
    using System;
    using System.IO;
    using Markdig;
    using UiMetadataFramework.Core.Binding;

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Field | AttributeTargets.Property, AllowMultiple = true)]
    [CustomPropertyConfig(IsArray = true)]
    public class DocumentationAttribute : Attribute, ICustomPropertyAttribute
    {
        public DocumentationAttribute(DocumentationPlacement placement, DocumentationSourceType sourceType, string source, params string[] files)
        {
            this.Placement = placement;
            this.Files = files;
            this.SourceType = sourceType;
            this.Content = GetContent(source, sourceType);
        }

        /// <summary>
        /// Gets or sets documentation content, which can be either a string or an external file,
        /// depending on the value of <see cref="Placement"/> property..
        /// </summary>
        public string Content { get; set; }

        public string[] Files { get; set; }

        /// <summary>
        /// Indicates where this documentation will be rendered.
        /// </summary>
        public DocumentationPlacement Placement { get; set; }

        /// <summary>
        /// Indicates where the documentation content exists.
        /// </summary>
        public DocumentationSourceType SourceType { get; set; }

        public string Name => "Documentation";

        public object GetValue()
        {
            return new
            {
                Placement = this.Placement,
                Files = this.Files,
                Content = this.Content
            };
        }

        private static string GetContent(string source, DocumentationSourceType sourceType)
        {
            string content = string.Empty;
            if (sourceType == DocumentationSourceType.File)
            {
                try
                {
                    using (var sr = new StreamReader($"Help/{source}"))
                    {
                        content = sr.ReadToEnd();
                    }
                }
                catch
                {
                    // ignored
                }
            }
            else
            {
                content = source;
            }

            var result = Markdown.ToHtml(content);

            return result;
        }
    }
}
