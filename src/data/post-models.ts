/**
 * AUTO GENERATED FROM HTTP RESPONSE JSON
 */
export interface Post {
    kind: RepliesKind;
    data: PostData;
}

export interface PostData {
    after:      null;
    dist:       number | null;
    modhash:    string;
    geo_filter: string;
    children:   PurpleChild[];
    before:     null;
}

export interface PurpleChild {
    kind: ChildKind;
    data: PurpleData;
}

export interface PurpleData {
    approved_at_utc?:                 null;
    subreddit?:                       Subreddit;
    selftext?:                        string;
    user_reports?:                    any[];
    saved?:                           boolean;
    mod_reason_title?:                null;
    gilded?:                          number;
    clicked?:                         boolean;
    title?:                           string;
    link_flair_richtext?:             any[];
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    hidden?:                          boolean;
    pwls?:                            number;
    link_flair_css_class?:            null;
    downs?:                           number;
    top_awarded_type?:                null;
    parent_whitelist_status?:         string;
    hide_score?:                      boolean;
    name:                             string;
    quarantine?:                      boolean;
    link_flair_text_color?:           string;
    upvote_ratio?:                    number;
    author_flair_background_color?:   null;
    subreddit_type?:                  SubredditType;
    ups?:                             number;
    total_awards_received?:           number;
    media_embed?:                     Gildings;
    author_flair_template_id?:        null;
    is_original_content?:             boolean;
    author_fullname?:                 string;
    secure_media?:                    null;
    is_reddit_media_domain?:          boolean;
    is_meta?:                         boolean;
    category?:                        null;
    secure_media_embed?:              Gildings;
    link_flair_text?:                 null;
    can_mod_post?:                    boolean;
    score?:                           number;
    approved_by?:                     null;
    is_created_from_ads_ui?:          boolean;
    author_premium?:                  boolean;
    thumbnail?:                       string;
    edited?:                          boolean | number;
    author_flair_css_class?:          null;
    author_flair_richtext?:           any[];
    gildings?:                        Gildings;
    content_categories?:              null;
    is_self?:                         boolean;
    mod_note?:                        null;
    created?:                         number;
    link_flair_type?:                 FlairType;
    wls?:                             number;
    removed_by_category?:             string;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    domain?:                          string;
    allow_live_comments?:             boolean;
    selftext_html?:                   null;
    likes?:                           null;
    suggested_sort?:                  null;
    banned_at_utc?:                   null;
    url_overridden_by_dest?:          string;
    view_count?:                      null;
    archived?:                        boolean;
    no_follow?:                       boolean;
    is_crosspostable?:                boolean;
    pinned?:                          boolean;
    over_18?:                         boolean;
    all_awardings?:                   any[];
    awarders?:                        any[];
    media_only?:                      boolean;
    can_gild?:                        boolean;
    spoiler?:                         boolean;
    locked?:                          boolean;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    visited?:                         boolean;
    removed_by?:                      null;
    num_reports?:                     null;
    distinguished?:                   null;
    subreddit_id?:                    SubredditID;
    author_is_blocked?:               boolean;
    mod_reason_by?:                   null;
    removal_reason?:                  null;
    link_flair_background_color?:     string;
    id:                               string;
    is_robot_indexable?:              boolean;
    num_duplicates?:                  number;
    report_reasons?:                  null;
    author?:                          string;
    discussion_type?:                 null;
    num_comments?:                    number;
    send_replies?:                    boolean;
    media?:                           null;
    contest_mode?:                    boolean;
    author_patreon_flair?:            boolean;
    author_flair_text_color?:         null;
    permalink?:                       string;
    whitelist_status?:                string;
    stickied?:                        boolean;
    url?:                             string;
    subreddit_subscribers?:           number;
    created_utc?:                     number;
    num_crossposts?:                  number;
    mod_reports?:                     any[];
    is_video?:                        boolean;
    comment_type?:                    null;
    replies?:                         PurpleReplies | string;
    collapsed_reason_code?:           null;
    parent_id?:                       ID;
    collapsed?:                       boolean;
    body?:                            string;
    is_submitter?:                    boolean;
    body_html?:                       string;
    collapsed_reason?:                null;
    associated_award?:                null;
    unrepliable_reason?:              null;
    score_hidden?:                    boolean;
    link_id?:                         ID;
    controversiality?:                number;
    depth?:                           number;
    collapsed_because_crowd_control?: null;
    media_metadata?:                  PurpleMediaMetadata;
    count?:                           number;
    children?:                        string[];
}

export enum FlairType {
    Text = "text",
}

export interface Gildings {
}

export enum ID {
    T316Jcp6D = "t3_16jcp6d",
}

export interface PurpleMediaMetadata {
    "giphy|67ThRZlYBvibtdF9JH|downsized": Giphy;
}

export interface Giphy {
    status: string;
    e:      string;
    m:      string;
    ext:    string;
    p:      P[];
    s:      S;
    t:      string;
    id:     string;
}

export interface P {
    y: number;
    x: number;
    u: string;
}

export interface S {
    y:   number;
    gif: string;
    mp4: string;
    x:   number;
}

export interface PurpleReplies {
    kind: RepliesKind;
    data: FluffyData;
}

export interface FluffyData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   FluffyChild[];
    before:     null;
}

export interface FluffyChild {
    kind: ChildKind;
    data: TentacledData;
}

export interface TentacledData {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    likes?:                           null;
    replies?:                         FluffyReplies | string;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    created_utc?:                     number;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    removal_reason?:                  null;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean | number;
    top_awarded_type?:                null;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    gildings?:                        Gildings;
    collapsed_reason?:                null;
    distinguished?:                   null;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    link_id?:                         ID;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    collapsed?:                       boolean;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
    author_cakeday?:                  boolean;
    media_metadata?:                  FluffyMediaMetadata;
}

export interface FluffyMediaMetadata {
    "giphy|xUPOqsXSwYuui8Kl5C": Giphy;
}

export interface FluffyReplies {
    kind: RepliesKind;
    data: StickyData;
}

export interface StickyData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   TentacledChild[];
    before:     null;
}

export interface TentacledChild {
    kind: ChildKind;
    data: IndigoData;
}

export interface IndigoData {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    likes?:                           null;
    replies?:                         TentacledReplies | string;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    removal_reason?:                  null;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean;
    top_awarded_type?:                null;
    downs?:                           number;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    collapsed?:                       boolean;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    gildings?:                        Gildings;
    collapsed_reason?:                null;
    distinguished?:                   null;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    link_id?:                         ID;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    created_utc?:                     number;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
    media_metadata?:                  TentacledMediaMetadata;
}

export interface TentacledMediaMetadata {
    "giphy|l2SqewO5AYDfST99C": Giphy;
}

export interface TentacledReplies {
    kind: RepliesKind;
    data: IndecentData;
}

export interface IndecentData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   StickyChild[];
    before:     null;
}

export interface StickyChild {
    kind: ChildKind;
    data: HilariousData;
}

export interface HilariousData {
    count?:                           number;
    name:                             string;
    id:                               string;
    parent_id:                        string;
    depth:                            number;
    children?:                        string[];
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    likes?:                           null;
    replies?:                         StickyReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    send_replies?:                    boolean;
    score?:                           number;
    author_fullname?:                 string;
    removal_reason?:                  null;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    collapsed?:                       boolean;
    body?:                            string;
    edited?:                          boolean;
    top_awarded_type?:                null;
    author_flair_css_class?:          null;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    gildings?:                        Gildings;
    collapsed_reason?:                null;
    distinguished?:                   null;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    link_id?:                         ID;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    created_utc?:                     number;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
}

export interface StickyReplies {
    kind: RepliesKind;
    data: AmbitiousData;
}

export interface AmbitiousData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   IndigoChild[];
    before:     null;
}

export interface IndigoChild {
    kind: ChildKind;
    data: CunningData;
}

export interface CunningData {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    distinguished?:                   null;
    likes?:                           null;
    replies?:                         IndigoReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null | string;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    removal_reason?:                  null;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean | number;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    gildings?:                        Gildings;
    collapsed_reason?:                null;
    link_id?:                         ID;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    top_awarded_type?:                null;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null | string;
    treatment_tags?:                  any[];
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    collapsed?:                       boolean;
    created_utc?:                     number;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null | string;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
}

export interface IndigoReplies {
    kind: RepliesKind;
    data: MagentaData;
}

export interface MagentaData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   IndecentChild[];
    before:     null;
}

export interface IndecentChild {
    kind: ChildKind;
    data: FriskyData;
}

export interface FriskyData {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    distinguished?:                   null;
    likes?:                           null;
    replies?:                         IndecentReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean;
    gildings?:                        Gildings;
    downs?:                           number;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    collapsed?:                       boolean;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    removal_reason?:                  null;
    collapsed_reason?:                null;
    link_id?:                         ID;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    top_awarded_type?:                null;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    created_utc?:                     number;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
}

export interface IndecentReplies {
    kind: RepliesKind;
    data: MischievousData;
}

export interface MischievousData {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   HilariousChild[];
    before:     null;
}

export interface HilariousChild {
    kind: ChildKind;
    data: BraggadociousData;
}

export interface BraggadociousData {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    distinguished?:                   null;
    likes?:                           null;
    replies?:                         HilariousReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    collapsed?:                       boolean;
    body?:                            string;
    edited?:                          boolean;
    gildings?:                        Gildings;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    removal_reason?:                  null;
    collapsed_reason?:                null;
    link_id?:                         ID;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    top_awarded_type?:                null;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    created_utc?:                     number;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
}

export interface HilariousReplies {
    kind: RepliesKind;
    data: Data1;
}

export interface Data1 {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   AmbitiousChild[];
    before:     null;
}

export interface AmbitiousChild {
    kind: ChildKind;
    data: Data2;
}

export interface Data2 {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    distinguished?:                   null;
    likes?:                           null;
    replies?:                         AmbitiousReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    created_utc?:                     number;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean;
    gildings?:                        Gildings;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    removal_reason?:                  null;
    collapsed_reason?:                null;
    link_id?:                         ID;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    top_awarded_type?:                null;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    collapsed?:                       boolean;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
}

export interface AmbitiousReplies {
    kind: RepliesKind;
    data: Data3;
}

export interface Data3 {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   CunningChild[];
    before:     null;
}

export interface CunningChild {
    kind: ChildKind;
    data: Data4;
}

export interface Data4 {
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    likes?:                           null;
    replies?:                         CunningReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    id:                               string;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    created_utc?:                     number;
    send_replies?:                    boolean;
    parent_id:                        string;
    score?:                           number;
    author_fullname?:                 string;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    body?:                            string;
    edited?:                          boolean;
    gildings?:                        Gildings;
    downs?:                           number;
    author_flair_css_class?:          null;
    name:                             string;
    is_submitter?:                    boolean;
    collapsed?:                       boolean;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    removal_reason?:                  null;
    collapsed_reason?:                null;
    distinguished?:                   null;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    top_awarded_type?:                null;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    link_id?:                         ID;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    depth:                            number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
    count?:                           number;
    children?:                        string[];
}

export interface CunningReplies {
    kind: RepliesKind;
    data: Data5;
}

export interface Data5 {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   MagentaChild[];
    before:     null;
}

export interface MagentaChild {
    kind: ChildKind;
    data: Data6;
}

export interface Data6 {
    count?:                           number;
    name:                             string;
    id:                               string;
    parent_id:                        string;
    depth:                            number;
    children?:                        string[];
    subreddit_id?:                    SubredditID;
    approved_at_utc?:                 null;
    author_is_blocked?:               boolean;
    comment_type?:                    null;
    awarders?:                        any[];
    mod_reason_by?:                   null;
    banned_by?:                       null;
    author_flair_type?:               FlairType;
    total_awards_received?:           number;
    subreddit?:                       Subreddit;
    author_flair_template_id?:        null;
    likes?:                           null;
    replies?:                         MagentaReplies;
    user_reports?:                    any[];
    saved?:                           boolean;
    banned_at_utc?:                   null;
    mod_reason_title?:                null;
    gilded?:                          number;
    archived?:                        boolean;
    collapsed_reason_code?:           null;
    no_follow?:                       boolean;
    author?:                          string;
    can_mod_post?:                    boolean;
    created_utc?:                     number;
    send_replies?:                    boolean;
    score?:                           number;
    author_fullname?:                 string;
    approved_by?:                     null;
    mod_note?:                        null;
    all_awardings?:                   any[];
    collapsed?:                       boolean;
    body?:                            string;
    edited?:                          boolean;
    top_awarded_type?:                null;
    author_flair_css_class?:          null;
    is_submitter?:                    boolean;
    downs?:                           number;
    author_flair_richtext?:           any[];
    author_patreon_flair?:            boolean;
    body_html?:                       string;
    removal_reason?:                  null;
    collapsed_reason?:                null;
    distinguished?:                   null;
    associated_award?:                null;
    stickied?:                        boolean;
    author_premium?:                  boolean;
    can_gild?:                        boolean;
    gildings?:                        Gildings;
    unrepliable_reason?:              null;
    author_flair_text_color?:         null;
    score_hidden?:                    boolean;
    permalink?:                       string;
    subreddit_type?:                  SubredditType;
    locked?:                          boolean;
    report_reasons?:                  null;
    created?:                         number;
    author_flair_text?:               null;
    treatment_tags?:                  any[];
    link_id?:                         ID;
    subreddit_name_prefixed?:         SubredditNamePrefixed;
    controversiality?:                number;
    author_flair_background_color?:   null;
    collapsed_because_crowd_control?: null;
    mod_reports?:                     any[];
    num_reports?:                     null;
    ups?:                             number;
}

export interface MagentaReplies {
    kind: RepliesKind;
    data: Data7;
}

export interface Data7 {
    after:      null;
    dist:       null;
    modhash:    string;
    geo_filter: string;
    children:   FriskyChild[];
    before:     null;
}

export interface FriskyChild {
    kind: ChildKind;
    data: Data8;
}

export interface Data8 {
    count:     number;
    name:      string;
    id:        string;
    parent_id: string;
    depth:     number;
    children:  any[];
}

export enum ChildKind {
    More = "more",
    T1 = "t1",
    T3 = "t3",
}

export enum RepliesKind {
    Listing = "Listing",
}

export enum Subreddit {
    Funnymemes = "Funnymemes",
}

export enum SubredditID {
    T52Xqtc = "t5_2xqtc",
}

export enum SubredditNamePrefixed {
    RFunnymemes = "r/Funnymemes",
}

export enum SubredditType {
    Public = "public",
}
