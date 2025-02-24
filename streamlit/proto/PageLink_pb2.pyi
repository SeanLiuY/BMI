"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
*!
Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2025)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

import builtins
import google.protobuf.descriptor
import google.protobuf.message
import typing

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor

@typing.final
class PageLink(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor

    PAGE_FIELD_NUMBER: builtins.int
    LABEL_FIELD_NUMBER: builtins.int
    ICON_FIELD_NUMBER: builtins.int
    PAGE_SCRIPT_HASH_FIELD_NUMBER: builtins.int
    HELP_FIELD_NUMBER: builtins.int
    USE_CONTAINER_WIDTH_FIELD_NUMBER: builtins.int
    DISABLED_FIELD_NUMBER: builtins.int
    EXTERNAL_FIELD_NUMBER: builtins.int
    page: builtins.str
    label: builtins.str
    icon: builtins.str
    page_script_hash: builtins.str
    help: builtins.str
    use_container_width: builtins.bool
    disabled: builtins.bool
    external: builtins.bool
    def __init__(
        self,
        *,
        page: builtins.str = ...,
        label: builtins.str = ...,
        icon: builtins.str = ...,
        page_script_hash: builtins.str = ...,
        help: builtins.str = ...,
        use_container_width: builtins.bool | None = ...,
        disabled: builtins.bool = ...,
        external: builtins.bool = ...,
    ) -> None: ...
    def HasField(self, field_name: typing.Literal["_use_container_width", b"_use_container_width", "use_container_width", b"use_container_width"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing.Literal["_use_container_width", b"_use_container_width", "disabled", b"disabled", "external", b"external", "help", b"help", "icon", b"icon", "label", b"label", "page", b"page", "page_script_hash", b"page_script_hash", "use_container_width", b"use_container_width"]) -> None: ...
    def WhichOneof(self, oneof_group: typing.Literal["_use_container_width", b"_use_container_width"]) -> typing.Literal["use_container_width"] | None: ...

global___PageLink = PageLink
